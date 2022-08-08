"use strict";

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert("DataPenyakit", [
      {
        id: 1,
        kode_penyakit: "P1",
        nama_penyakit: "Busuk Akar",
        solusi_penyakit: JSON.stringify([
          "- Secara teknis tanaman dicabut kemudian dibakar",
          "- Disekitar tanaman sakit tersebut disemprot dengan Koperoxychloride setiap 5 gr dilarutkan dengan 5 liter air",
        ]),
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        id: 2,
        kode_penyakit: "P2",
        nama_penyakit: "Penyakit Daun",
        solusi_penyakit: JSON.stringify([
          "- Melakukan penjarangan pelindung persemaian",
          "- Dilakukan penyemprotan Koperoxychloride 0,5%",
        ]),
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        id: 3,
        kode_penyakit: "P3",
        nama_penyakit: "Mati Bujang (Mati Muda)",
        solusi_penyakit: JSON.stringify([
          "- Memilih tanah yang cocok untuk tanaman cengkeh",
          "- Lakukan pengolahan tanah dengan baik dan melakukan penanaman yang tepat",
        ]),
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        id: 4,
        kode_penyakit: "P4",
        nama_penyakit: "Penyakit Ganggang",
        solusi_penyakit: JSON.stringify([
          "- Memberikan perlindungan serta peneduh yang baik",
          "- Melakukan penyiraman dengan baik sesuai dengan kebutuhan tanaman",
        ]),
        created_at: new Date(),
        updated_at: new Date(),
      },
    ]);
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("DataPenyakit", null, {});
  },
};
