const {
    user_address_manager,
    user_address_add,
    user_address_manager_update,
    user_address_manager_delete,
  } = require("../../services/userside/address");

exports.user_address_manager = async (req, res) => {
    try {
      let result = await user_address_manager(req, res);
      if (result.success) {
        return res.status(200).json(result.data.entries || []);
      } else {
        return res.status(400).json(result);
      }
    } catch (error) {
      return res.status(500).json({ success: false, message: error.message });
    }
};

exports.user_address_add = async (req, res) => {
    try {
      let result = await user_address_add(req, res);
      if (result.success) {
        return res.status(200).json(result.data.entries || []);
      } else {
        return res.status(400).json(result);
      }
    } catch (error) {
      return res.status(500).json({ success: false, message: error.message });
    }
};

exports.user_address_manager_update = async (req, res) => {
    try {
      let result = await user_address_manager_update(req, res);
      if (result.success) {
        return res.status(200).json(result.data.entries || []);
      } else {
        return res.status(400).json(result);
      }
    } catch (error) {
      return res.status(500).json({ success: false, message: error.message });
    }
};

exports.user_address_manager_delete = async (req, res) => {
    try {
      let result = await user_address_manager_delete(req, res);
      if (result.success) {
        return res.status(200).json(result.data.entries || []);
      } else {
        return res.status(400).json(result);
      }
    } catch (error) {
      return res.status(500).json({ success: false, message: error.message });
    }
};
