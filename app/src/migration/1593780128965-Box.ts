import {MigrationInterface, QueryRunner} from "typeorm";

export class Box1593780128965 implements MigrationInterface {
    name = 'Box1593780128965'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query("CREATE TABLE `box` (`id` int NOT NULL AUTO_INCREMENT, PRIMARY KEY (`id`)) ENGINE=InnoDB");
        await queryRunner.query("ALTER TABLE `pokemon` ADD `boxId` int NULL");
        await queryRunner.query("ALTER TABLE `pokemon` ADD CONSTRAINT `FK_8c5ef9c2a142d8efe8ce1fc07bf` FOREIGN KEY (`boxId`) REFERENCES `box`(`id`) ON DELETE NO ACTION ON UPDATE NO ACTION");
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query("ALTER TABLE `pokemon` DROP FOREIGN KEY `FK_8c5ef9c2a142d8efe8ce1fc07bf`");
        await queryRunner.query("ALTER TABLE `pokemon` DROP COLUMN `boxId`");
        await queryRunner.query("DROP TABLE `box`");
    }

}
