import {MigrationInterface, QueryRunner} from "typeorm";

export class Pokemon1593676324970 implements MigrationInterface {
    name = 'Pokemon1593676324970'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query("CREATE TABLE `pokemon` (`id` int NOT NULL AUTO_INCREMENT, `name` varchar(255) NOT NULL, `type` varchar(255) NOT NULL, PRIMARY KEY (`id`)) ENGINE=InnoDB");
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query("DROP TABLE `pokemon`");
    }

}
