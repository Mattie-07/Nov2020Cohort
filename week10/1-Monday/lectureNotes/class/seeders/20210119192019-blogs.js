'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {


    
      // Add seed commands here.
  
      Example:
      await queryInterface.bulkInsert('blogs', [
        {
          title: 'Protoypes',
          body: 'doifugnaui9gnerg8uigbnreiugebiugbsb',
          userID: 1,
          createdAt: new Date(),
          updatedAt: new Date()
        },{
          title: 'Sequelize',
          body: '4t3taegegbwtgbwbwgaabgrbw',
          userID: 2,
          createdAt: new Date(),
          updatedAt: new Date()
        },{
          title: 'PG Promise',
          body: 'bsbbbedbs34t33qbt4eum5mb3a44t43ewbbbb3qbt',
          userID: 3,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          title: 'React',
          body: 'dsgdgegsfgse5m6uem5ume5m5emue56mm5emu55emm5mmj',
          userID: 4,
          createdAt: new Date(),
          updatedAt: new Date()
        },{
          title: 'Houston - Clutch City',
          body: "edghsdee56umme5memmme5m5m5me5",
          userID: 1,
          createdAt: new Date(),
          updatedAt: new Date()
        }
        ,{
          title: 'Seattle - Emerald City',
          body: "gegegeg5ergegg6umme5memmme5m5m5me5",
          userID: 3,
          createdAt: new Date(),
          updatedAt: new Date()
        }
        ,{
          title: 'Atlanta',
          body: "e56umme5memmmsdgfdsgdgsgdgdsgdgdge5m5m5me5",
          userID: 1,
          createdAt: new Date(),
          updatedAt: new Date()
        }
        ,{
          title: ' California',
          body: "e56umme5memmme5dsghsehsem5m5me5",
          userID: 1,
          createdAt: new Date(),
          updatedAt: new Date()
        }
      ]
      );
  
  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
