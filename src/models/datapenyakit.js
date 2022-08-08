"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class DataPenyakit extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  DataPenyakit.init(
    {
      kode_penyakit: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
        validate: {
          notNull: { msg: "kode_penyakit is required" },
        },
      },
      nama_penyakit: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
        validate: {
          notNull: { msg: "nama_penyakit is required" },
        },
      },
      solusi_penyakit: {
        type: DataTypes.TEXT("long"),
        allowNull: false,
        validate: {
          notNull: { msg: "solusi_penyakit is required" },
        },
      },
    },
    {
      sequelize,
      modelName: "DataPenyakit",
      tableName: "DataPenyakit",
      timestamps: true,
      createdAt: "created_at",
      updatedAt: "updated_at"
    }
  );
  return DataPenyakit;
};
