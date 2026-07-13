const Product = require('../models/productModel');
const livePrice = require('../models/jewelleryPricingModel');
exports.productPricing = async (req, res) => {
    console.log("productPricing API request query:", req.query);
    console.log("productPricing API request body:", req.body);

    const product_id = req.query.product_id || req.body.product_id;
    const rawSize = req.body.size || req.query.size || req.body.Ssize || req.query.Ssize;
    const rawMetal = req.body.metal || req.query.metal || req.body.Smetal || req.query.Smetal;
    const rawDiamond = req.body.diamond || req.query.diamond || req.body.Sdiamond || req.query.Sdiamond;
    // const rawPurity = req.body.purity || req.query.purity || req.body.Spurity || req.query.Spurity;
    const size = Number(rawSize);

    console.log("Resolved product_id:", product_id);
    console.log("Resolved size:", rawMetal);

    try {
        const weight_differenceINsize_g = 0.140;
        let real_gold_weight = 0
        let real_diamond_weight = 0;
        let item_gold_price = 0;
        let item_diamond_price = 0;
        let item_base_price = 0;
        let item_base_price_withGST = 0;


        const product_data = await Product.findById({ _id: product_id });
        if (!product_data) {
            return {
                success: false,
                message: "Product not found",
                data: null
            }
        }
        const current_price = await livePrice.findOne().sort({ createdAt: -1 });
        const makingCharges = product_data.making_charges || 0;
        const gst_percent = current_price.gst_percent || 3;
        // const gold_weight = item.gold_weight || 0;
        const solitaire_price = product_data.solitaires_price || 0;
        const gemstone_price = product_data.gemstone_price || 0;
        if (product_data.product_category === "Rings") {
            if (isNaN(size) || size === 12 || rawMetal === "14k" || rawDiamond === "IJ-SI") {
                real_gold_weight = product_data.gold_weight;
            } else if (!isNaN(size) || size !== 12 || rawMetal === "14k" || rawDiamond === "IJ-SI") {
                // Proportional weight change based on distance from base size 12
                real_gold_weight = product_data.gold_weight + (size - 12) * weight_differenceINsize_g;
            } else if (!isNaN(size) || size !== 12 || rawMetal !== "14k" || rawDiamond === "IJ-SI") {
                real_gold_weight = product_data.gold_weight + (size - 12) * weight_differenceINsize_g;
                if (rawMetal === "9k") {
                    real_gold_weight = real_gold_weight * 9 / 14;
                } else if (rawMetal === "18k") {
                    real_gold_weight = real_gold_weight * 18 / 14;
                } else if (rawMetal === "24k") {
                    real_gold_weight = real_gold_weight * 24 / 14;
                } else if (rawMetal === "22k") {
                    real_gold_weight = real_gold_weight * 22 / 14;
                }
            }
        }


        if (product_data.product_type && product_data.product_type.toLowerCase() === "diamond") {
            const total_diamond_weight = (product_data.diamond_weight || 0) * (product_data.diamond_count || 1);
            console.log(total_diamond_weight, "total_diamond_weight");
            const gold_rate_14k = current_price.gold_rate_24k * 14 / 24;
            item_gold_price = real_gold_weight * gold_rate_14k;
            item_diamond_price = total_diamond_weight * current_price.diamond_rate;
            item_base_price = item_gold_price + item_diamond_price + makingCharges + solitaire_price + gemstone_price;
            item_base_price_withGST = Math.round(item_base_price + (item_base_price * gst_percent / 100));
            console.log(item_base_price_withGST, "base_price_withGST");
        } else {

        }

        return {
            success: true,
            message: "product data",
            gold_weight: real_gold_weight,
            price: item_base_price_withGST,
            dimond_weight: real_diamond_weight,


        }
    } catch (error) {
        console.log(error.message);
        return {
            success: false,
            message: error.message,
            data: null
        }
    }
}

