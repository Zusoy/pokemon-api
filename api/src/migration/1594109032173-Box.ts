import {MigrationInterface, QueryRunner} from "typeorm";

export class Box1594109032173 implements MigrationInterface {
    name = 'Box1594109032173'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query("CREATE TABLE `Pokemon` (`id` int NOT NULL AUTO_INCREMENT, `name` varchar(255) NOT NULL, `type` varchar(255) NOT NULL, `boxId` int NULL, PRIMARY KEY (`id`)) ENGINE=InnoDB");
        await queryRunner.query("CREATE TABLE `Human` (`id` int NOT NULL AUTO_INCREMENT, `name` varchar(255) NOT NULL, PRIMARY KEY (`id`)) ENGINE=InnoDB");
        await queryRunner.query("CREATE TABLE `Box` (`id` int NOT NULL AUTO_INCREMENT, `ownerId` int NULL, PRIMARY KEY (`id`)) ENGINE=InnoDB");
        await queryRunner.query("ALTER TABLE `Pokemon` ADD CONSTRAINT `FK_f7b6b444f1a46c273c9e6eb5e9a` FOREIGN KEY (`boxId`) REFERENCES `Box`(`id`) ON DELETE NO ACTION ON UPDATE NO ACTION");
        await queryRunner.query("ALTER TABLE `Box` ADD CONSTRAINT `FK_a3647f5e58e8603261bbfba14f4` FOREIGN KEY (`ownerId`) REFERENCES `Human`(`id`) ON DELETE NO ACTION ON UPDATE NO ACTION");
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query("ALTER TABLE `Box` DROP FOREIGN KEY `FK_a3647f5e58e8603261bbfba14f4`");
        await queryRunner.query("ALTER TABLE `Pokemon` DROP FOREIGN KEY `FK_f7b6b444f1a46c273c9e6eb5e9a`");
        await queryRunner.query("DROP TABLE `Box`");
        await queryRunner.query("DROP TABLE `Human`");
        await queryRunner.query("DROP TABLE `Pokemon`");
    }

}
