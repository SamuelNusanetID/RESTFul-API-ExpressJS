const db = require('../models')
const DataPenyakitModel = db.DataPenyakit;
const Op = db.Sequelize.Op;
const { getPagination, getPagingData } = require('../utils/helpers.utils');

class DataPenyakit {
  async GetDataPenyakit(req, res) {
    const { page, size, keyword, id } = req.query;
    var condition = keyword ? { nama_penyakit: { [Op.like]: `%${keyword}%` } } : null;
    const { limit, offset } = getPagination(page, size);

    const fetchAllDataPenyakit = await DataPenyakitModel.findAndCountAll({ where: condition, limit, offset })
      .then(data => {
        const response = getPagingData(data, page, limit);
        res.json(response);
      })
      .catch(err => {
        res.status(500).json({
          message:
            err.message || "Some error occurred while retrieving data penyakit."
        });
      });;
  }

  async GetDataPenyakitByID(req, res) {
    const id = req.params.id;

    const fetchDataPenyakit = await DataPenyakitModel.findByPk(id)
      .then(data => {
        if (data) {
          res.send(data);
        } else {
          res.status(404).json({
            message: `Cannot find data penyakit with id=${id}.`
          });
        }
      })
      .catch(err => {
        res.status(500).json({
          message: "Error retrieving data penyakit with id=" + id
        });
      });
  }

  async SaveDataPenyakit(req, res) {
    const datapenyakit = {
      kode_penyakit: req.body.kode_penyakit,
      nama_penyakit: req.body.nama_penyakit,
      solusi_penyakit: JSON.stringify(req.body.solusi_penyakit)
    };

    const searchDataPenyakit = await DataPenyakitModel.findAndCountAll({
      where: datapenyakit
    })
      .then(async (result) => {
        if (result.rows != 0) {
          res.status(500).json({
            message: "Data has already exist!."
          });
        } else {
          const addDataPenyakit = await DataPenyakitModel.create(datapenyakit)
            .then(data => {
              res.status(201).json({
                message: "Succesfully created data penyakit."
              });
            })
            .catch(err => {
              res.status(500).json({
                message:
                  err.errors
              });
            });
        }
      })
      .catch(err => {
        res.status(500).json({
          message:
            err.errors
        });
      });
  }

  async UpdateDataPenyakit(req, res) {
    const id = req.params.id;

    const datapenyakit = {
      kode_penyakit: req.body.kode_penyakit,
      nama_penyakit: req.body.nama_penyakit,
      solusi_penyakit: JSON.stringify(req.body.solusi_penyakit)
    };

    DataPenyakitModel.update(datapenyakit, {
      where: { id: id }
    })
      .then(num => {
        if (num == 1) {
          res.status(200).json({
            message: "Succesfully updated data penyakit."
          });
        } else {
          res.status(500).json({
            message:
              `Cannot update data penyakit with id = ${id}. Maybe data penyakit was not found or req.body is empty!`
          });
        }
      })
      .catch(err => {
        res.status(500).send({
          message: "Error updating data penyakit with id=" + id
        });
      });
  }

  async DeleteDataPenyakit(req, res) {
    const id = req.params.id;

    DataPenyakitModel.destroy({
      where: { id: id }
    })
      .then(num => {
        if (num == 1) {
          res.send({
            message: "Succesfully deleted data penyakit."
          });
        } else {
          res.send({
            message: `Cannot delete data penyakit with id=${id}. Maybe data penyakit was not found!`
          });
        }
      })
      .catch(err => {
        res.status(500).send({
          message: "Could not delete data penyakit with id=" + id
        });
      });
  }
}

module.exports = DataPenyakit;
