SET GLOBAL time_zone = '+0:00';

CREATE TABLE `Shop`
(
    `id`                     int(10) unsigned NOT NULL AUTO_INCREMENT,
    `ownerId`                int(10) unsigned NOT NULL,
    `name`                   varchar(255) COLLATE utf8_czech_ci NOT NULL,
    `url`                    varchar(255) COLLATE utf8_czech_ci DEFAULT NULL,
    `email`                  varchar(50) COLLATE utf8_czech_ci  NOT NULL,
    `orderPhone`             varchar(20) COLLATE utf8_czech_ci  DEFAULT NULL,
    `phone`                  varchar(20) COLLATE utf8_czech_ci  DEFAULT NULL,
    `importUrl`              varchar(255) COLLATE utf8_czech_ci DEFAULT NULL,
    `status`                 ENUM ( 'new',
        'ppc',
        'free',
        'blocked',
        'to_delete'
        ) NOT NULL,
    `deactivationReason`     ENUM ( 'admin',
        'bad-delivery',
        'bad-price',
        'bad-url',
        'condition',
        'debtor',
        'not-active',
        'no-credit',
        'not-xml',
        'shop'
        ) DEFAULT NULL,
    `termsAccepted`          tinyint(1) unsigned NOT NULL DEFAULT '0',
    `questionnaireRecipient` varchar(50) COLLATE utf8_czech_ci  DEFAULT NULL,
    `questionnaireSender`    varchar(50) COLLATE utf8_czech_ci  DEFAULT NULL,
    `certifiedAgreementDate` timestamp NULL DEFAULT NULL,
    `customerId`             char(36)                           DEFAULT NULL,
    `createdAt`              timestamp NULL DEFAULT NULL,
    `updatedAt`              timestamp NULL DEFAULT NULL,

    Primary Key (`id`),
    UNIQUE KEY `url` (`url`)
) ENGINE=InnoDB  DEFAULT CHARSET=utf8 COLLATE=utf8_czech_ci;

SET NAMES utf8;

INSERT INTO Shop(ownerId, name, url, email, orderPhone, phone, importUrl, status, deactivationReason, termsAccepted,
                 questionnaireRecipient, questionnaireSender, certifiedAgreementDate, customerId, createdAt, updatedAt)
VALUES (15456, "Megadárky.cz", "www.megadarky.cz", "shop@megadarky.cz", NULL, "+420755411200",
        "www.megadarky.cz/data/import.xml", "free", "admin", 1, NULL, NULL, NULL,
        "46263798-ca48-4d17-ade2-e7f505da90d7", "2020-11-05 11:42:21", "2020-11-07 15:11:59");

INSERT INTO Shop(ownerId, name, url, email, orderPhone, phone, importUrl, status, deactivationReason, termsAccepted,
                 questionnaireRecipient, questionnaireSender, certifiedAgreementDate, customerId, createdAt, updatedAt)
VALUES (151996, "Superkitchen", "www.superkitchen.cz", "smolik@superkitchen.cz", "+420771258998", "+4206954785620",
        "www.superkitchen.cz/datasets/feed.xml", "ppc", "admin", 1, "dotaznik@superkitchen.cz",
        "customer_service@superkitchen.cz", "2020-12-14 18:02:01", "fa5b8b30-baa0-43e5-a8ef-0029ab5dacea",
        "2020-12-02 17:22:11", "2021-02-01 08:33:48"),
       (655414, "Juhyho modýlky", "www.rezatyrakety.cz", "miroslav.juhos@heureka.cz", NULL, NULL,
        "www.rezatyrakety.cz/ultrasecretstuff/feed.xml", "new", NULL, 0, NULL, NULL, NULL,
        "4d61bfbe-ee62-4e7a-9dd8-a89366026d7e", "2021-06-23 08:44:55", NULL),
       (655414, "IQOS Store", "www.iqos.cz", "shop@iqos.cz", NULL, NULL, "www.iqos.cz/productfeed.xml", "blocked",
        "condition", 1, "dotaznik@iqos.cz", "podpora@iqos.cz", "2021-02-02 11:54:12",
        "91d3b650-1a42-4b18-bdff-af79903c193b", "2021-01-15 07:38:00", "2021-03-11 11:21:14");