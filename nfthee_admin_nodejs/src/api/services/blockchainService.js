const { blockchainModel } = require('../../models');
const { credentials } = require('../../config').constantCredentials;

exports.addBlockchain = async (req) => {
  const checkName = await blockchainModel.findOne({ name: req.body.name });
  if (checkName) {
    return {
      message: 'blockchain name already exists',
      status: false,
      data: [],
    };
  }
  if (req.file) {
    req.body.icon = req.file.location;
  }
  const blockchain = await blockchainModel.create(req.body);
  return {
    message: 'blockchain saved',
    status: true,
    data: blockchain,
  };
};

exports.getBlockchain = async (req, res) => {
  try {
    let query = {};
    if (req.query?.id) {
      query = { _id: req.query.id };
    }
    let findData = await blockchainModel.find(query).sort({ createdAt: -1 });
    return {
      message: 'Getting blockchain listing.',
      status: true,
      data: findData,
    };
  } catch (error) {
    throw error;
  }
};

exports.editBlockchain = async (req) => {
  const id = req.body.id;
  const checkName = await blockchainModel.findOne({
    _id: { $ne: id },
    name: req.body.name,
  });
  if (checkName) {
    return {
      message: 'blockchain name already exists',
      status: false,
      data: [],
    };
  }
  if (req.file) {
    req.body.icon = req.file.location;
  } else {
    req.body.icon = undefined;
  }
  const blockchain = await blockchainModel.findByIdAndUpdate(id, req.body, {
    new: true,
  });
  if (blockchain) {
    return {
      message: 'blockchain updated',
      status: true,
      data: blockchain,
    };
  } else {
    return {
      message: 'blockchain not found',
      status: false,
      data: {},
    };
  }
};

exports.deleteBlockchain = async (req, res) => {
  try {
    const id = req.query.id;
    let delData = await blockchainModel.findByIdAndDelete(id);
    if (delData) {
      return {
        message: 'blockchain deleted.',
        status: true,
        data: delData,
      };
    } else {
      return {
        message: 'blockchain not found.',
        status: false,
        data: {},
      };
    }
  } catch (error) {
    return {
      message: 'Something went wrong',
      status: false,
      data: {},
    };
  }
};
