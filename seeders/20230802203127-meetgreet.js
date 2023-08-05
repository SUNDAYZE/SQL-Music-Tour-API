'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('meet_greet', [
      {
        event_id: 1,
        band_id: 1,
        meet_start_time: '12:00:00.000Z',
        meet_end_time: '14:00:00.000Z'
      },
      {
        event_id: 2,
        band_id: 2,
        meet_start_time: '13:00:00.000Z',
        meet_end_time: '15:00:00.000Z'
      },
      {
        event_id: 3,
        band_id: 3,
        meet_start_time: '13:00:00.000Z',
        meet_end_time: '16:00:00.000Z'
      },
      {
        event_id: 4,
        band_id: 4,
        meet_start_time: '12:00:00.000Z',
        meet_end_time: '17:00:00.000Z'
      },
      {
        event_id: 5,
        band_id: 5,
        meet_start_time: '11:00:00.000Z',
        meet_end_time: '14:00:00.000Z'
      },
      {
        event_id: 6,
        band_id: 6,
        meet_start_time: '11:00:00.000Z',
        meet_end_time: '14:00:00.000Z'
      },
      {
        event_id: 7,
        band_id: 7,
        meet_start_time: '18:00:00.000Z',
        meet_end_time: '21:00:00.000Z'
      },
      {
        event_id: 8,
        band_id: 8,
        meet_start_time: '16:00:00.000Z',
        meet_end_time: '19:00:00.000Z'
      },
      {
        event_id: 9,
        band_id: 9,
        meet_start_time: '10:00:00.000Z',
        meet_end_time: '16:00:00.000Z'
      },
      {
        event_id: 10,
        band_id: 10,
        meet_start_time: '12:00:00.000Z',
        meet_end_time: '15:00:00.000Z'
      },
    ], {});
  },
  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('meet_greet', null, {});
  }
};