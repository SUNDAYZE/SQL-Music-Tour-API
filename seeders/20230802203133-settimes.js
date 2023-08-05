'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
    async up(queryInterface, Sequelize) {
        await queryInterface.bulkInsert('set_time', [
            {
                event_id: '1',
                stage_id: '1',
                band_id: '1',
                start_time: '2024-05-06T18:00:00',
                end_time: '2024-05-06T21:00:00'
            },
            {
                event_id: '2',
                stage_id: '2',
                band_id: '2',
                start_time: '2024-05-06T18:00:00',
                end_time: '2024-05-06T20:00:00'
            },
            {
                event_id: '3',
                stage_id: '3',
                band_id: '3',
                start_time: '2024-05-06T19:00:00',
                end_time: '2024-05-06T21:00:00'
            },
            {
                event_id: '4',
                stage_id: '4',
                band_id: '4',
                start_time: '2024-05-06T19:00:00',
                end_time: '2024-05-06T22:00:00'
            },
            {
                event_id: '5',
                stage_id: '5',
                band_id: '5',
                start_time: '2024-05-06T20:00:00',
                end_time: '2024-05-06T23:00:00'
            },
            {
                event_id: '6',
                stage_id: '6',
                band_id: '6',
                start_time: '2024-05-06T20:00:00',
                end_time: '2024-05-06T22:00:00'
            },
            {
                event_id: '7',
                stage_id: '7',
                band_id: '7',
                start_time: '2024-05-06T16:00:00',
                end_time: '2024-05-06T19:00:00'
            },
            {
                event_id: '8',
                stage_id: '8',
                band_id: '8',
                start_time: '2024-05-06T17:00:00',
                end_time: '2024-05-06T18:00:00'
            },
            {
                event_id: '9',
                stage_id: '9',
                band_id: '9',
                start_time: '2024-05-06T18:00:00',
                end_time: '2024-05-06T19:00:00'
            },
            {
                event_id: '10',
                stage_id: '10',
                band_id: '10',
                start_time: '2024-05-06T18:00:00',
                end_time: '2024-05-06T23:00:00'
            },
        ], {});
    },
    async down(queryInterface, Sequelize) {
        await queryInterface.bulkDelete('set_time', null, {});
    }
};