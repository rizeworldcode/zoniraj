const product = require('../models/productModel');
const livePrice = require('../models/jewelleryPricingModel');

exports.productBasePricing = async (req, res) => {
    let gold_weight = 0;
    let gold_price = 0;
    let total_diamond_weight = 0;
    let diamond_price = 0;
    let base_price = 0;
    let base_price_withGST = 0;

    try {
        const product_category = req.query.product_category;
        const current_price = await livePrice.findOne().sort({ createdAt: -1 });

        const product_data = await product.find({ product_category: product_category });
        if (!product_data || product_data.length === 0) {
            return {
                success: false,
                message: "Product not found",
                data: null
            }
        }

        const calculatedProducts = [];

        for (const item of product_data) {
            console.log(item.product_type);
            const isDiamond = String(item.product_type).toLowerCase() === "diamond";

            if (isDiamond) {
                if (!item.solitaires_price) {
                    console.log("no solitaire weight");
                    total_diamond_weight = (item.diamond_weight || 0) * (item.diamond_count || 1);
                    console.log(total_diamond_weight, "total_diamond_weight");
                    
                    const gst_percent = current_price.gst_percent || 3;
                    gold_weight = item.gold_weight || 0;
                    gold_price = gold_weight * current_price.gold_rate_14k;
                    diamond_price = total_diamond_weight * current_price.diamond_rate;
                    
                    const baseCost = gold_price + diamond_price;
                    const makingCharges = baseCost * ((item.making_charges || 0) / 100);
                    base_price = baseCost + makingCharges;
                    base_price_withGST = base_price + (base_price * gst_percent / 100);
                    console.log(base_price_withGST, "base_price_withGST");

                    calculatedProducts.push({
                        success: true,
                        message: "Product base pricing",
                        product_id: item.product_id,
                        product_title: item.product_title,
                        gold_price: gold_price,
                        diamond_price: diamond_price,
                        makingCharges: makingCharges,
                        base_price: base_price,
                        base_price_withGST: base_price_withGST
                    });
                } else {
                    total_diamond_weight = (item.diamond_weight || 0) * (item.diamond_count || 1);
                    console.log(total_diamond_weight, "total_diamond_weight");
                    
                    const gst_percent = current_price.gst_percent || 3;
                    const solitaire_price = item.solitaires_price || 0;
                    gold_weight = item.gold_weight || 0;
                    gold_price = gold_weight * current_price.gold_rate_14k;
                    diamond_price = total_diamond_weight * current_price.diamond_rate;
                    
                    const baseCost = gold_price + diamond_price + solitaire_price;
                    const makingCharges = baseCost * ((item.making_charges || 0) / 100);
                    base_price = baseCost + makingCharges;
                    base_price_withGST = base_price + (base_price * gst_percent / 100);
                    console.log(base_price_withGST, "base_price_withGST");

                    calculatedProducts.push({
                        success: true,
                        message: "Product base pricing",
                        product_id: item.product_id,
                        product_title: item.product_title,
                        gold_price: gold_price,
                        diamond_price: diamond_price,
                        solitaire_price: solitaire_price,
                        makingCharges: makingCharges,
                        base_price: base_price,
                        base_price_withGST: base_price_withGST
                    });
                }
            } else {
                const gst_percent = current_price.gst_percent || 3;
                gold_weight = item.gold_weight || 0;
                const gold_rate_18kt = current_price.gold_rate_14k * 22 / 14;
                gold_price = gold_weight * gold_rate_18kt;
                
                const baseCost = gold_price;
                const makingCharges = baseCost * ((item.making_charges || 0) / 100);
                base_price = baseCost + makingCharges;
                base_price_withGST = base_price + (base_price * gst_percent / 100);
                console.log(base_price_withGST, "base_price_withGST");

                calculatedProducts.push({
                    success: true,
                    message: "Product base pricing",
                    product_id: item.product_id,
                    product_title: item.product_title,
                    gold_price: gold_price,
                    makingCharges: makingCharges,
                    base_price: base_price,
                    base_price_withGST: base_price_withGST
                });
            }
        }

        // Return first element if controller expects an object, or full list
        return {
            success: true,
            message: "Product base pricing calculated",
            gold_price: calculatedProducts[0] ? calculatedProducts[0].gold_price : 0,
            diamond_price: calculatedProducts[0] ? calculatedProducts[0].diamond_price : 0,
            data: calculatedProducts
        };

    } catch (error) {
        console.log(error.message);
        return {
            success: false,
            message: error.message,
            data: null
        }
    }
}