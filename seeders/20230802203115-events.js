'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('event', [
      {
        name: 'Freedom Frequency Festival',
        date: '2024-07-04T00:00:00.000Z',
        start_time: '2024-05-06T9:00:00',
        end_time: '2024-05-06T23:00:00'
      },
      {
        name: 'Dance Maze',
        date: '2024-05-15T00:00:00.000Z',
        start_time: '2024-05-06T09:00:00',
        end_time: '2024-05-06T22:00:00'
      },
      {
        name: 'Soundlicious',
        date: '2024-03-13T00:00:00.000Z',
        start_time: '2024-05-06T09:00:00',
        end_time: '2024-05-06T23:00:00'
      },
      {
        name: 'Jazz Roots',
        date: '2024-06-22T00:00:00.000Z',
        start_time: '2024-05-06T09:00:00',
        end_time: '2024-05-06T21:00:00'
      },
      {
        name: 'Groove and Soothe',
        date: '2024-09-28T00:00:00.000Z',
        start_time: '2024-05-06T10:00:00',
        end_time: '2024-05-06T21:00:00'
      },
      {
        name: 'Burning Man',
        date: '2024-01-26T00:00:00.000Z',
        start_time: '2024-05-06T10:00:00',
        end_time: '2024-05-06T22:00:00'
      },
      {
        name: 'Festivista',
        date: '2024-05-05T00:00:00.000Z',
        start_time: '2024-05-06T10:00:00',
        end_time: '2024-05-06T23:00:00'
      },
      {
        name: 'Possiblepop',
        date: '2024-04-19T00:00:00.000Z',
        start_time: '2024-05-06T10:00:00',
        end_time: '2024-05-06T23:00:00'
      },
      {
        name: 'Indigo Musik',
        date: '2024-10-13T00:00:00.000Z',
        start_time: '2024-05-06T11:00:00',
        end_time: '2024-05-06T22:00:00'
      },
      {
        name: 'Audio Affairs',
        date: '2024-11-15T00:00:00.000Z',
        start_time: '2024-05-06T11:00:00',
        end_time: '2024-05-06T23:00:00'
      },
    ], {});
  },
  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('event', null, {});
  }
};
