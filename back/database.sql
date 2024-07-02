DO
$$
    BEGIN
        IF NOT EXISTS (SELECT FROM pg_catalog.pg_roles WHERE rolname = 'BOUNCEUSER') THEN
            CREATE USER "BOUNCEUSER" WITH PASSWORD 'BounceShop!13';
        END IF;
    END
$$;

DO
$$
    BEGIN
        IF NOT EXISTS (SELECT FROM pg_database WHERE datname = 'BOUNCESHOP') THEN
            CREATE DATABASE "BOUNCESHOP";
        END IF;
    END
$$;

GRANT ALL PRIVILEGES ON DATABASE "BOUNCESHOP" TO "BOUNCEUSER";

drop table "Prices" cascade;

drop table "PreviousParts" cascade;

drop table "Operations" cascade;

drop table "OperationLists" cascade;

drop table "OperationHistories" cascade;

drop table "Machines" cascade;

drop table "WorkStations" cascade;

drop table "ValidMachines" cascade;

drop table "JobQualifications" cascade;

drop table "Ranges" cascade;

drop table "Users" cascade;

drop table "QuoteLines" cascade;

drop table "Quotes" cascade;

drop table "OrderLines" cascade;

drop table "Parts" cascade;

drop table "Suppliers" cascade;

drop table "Orders" cascade;


-- Table: ValidMachine
CREATE TABLE "ValidMachines" (
    "validMachineID" SERIAL PRIMARY KEY
);

-- Table: Machine
CREATE TABLE "Machines" (
    "machineID" SERIAL PRIMARY KEY,
    "label" VARCHAR NOT NULL
);

-- Table: Supplier
CREATE TABLE "Suppliers" (
    "supplierID" SERIAL PRIMARY KEY,
    "name" TEXT NOT NULL
);

-- Table: PartAll
CREATE TABLE "Parts" (
    "partID" SERIAL PRIMARY KEY,
    "type" CHAR(1) NOT NULL,
    "quantity" INTEGER NOT NULL,
    "supplierID" INTEGER NULL REFERENCES "Suppliers"("supplierID"),
    "label" VARCHAR NOT NULL,
    description TEXT NOT NULL
);

-- Table: Price
CREATE TABLE "Prices" (
    "priceID" SERIAL PRIMARY KEY,
    "price" FLOAT NOT NULL,
    "date" DATE NOT NULL,
    "partID" INTEGER NOT NULL REFERENCES "Parts"("partID")
);


-- Table: PreviousPart
CREATE TABLE "PreviousParts" (
    "previousPartID" SERIAL PRIMARY KEY,
    "quantity" INTEGER NOT NULL,
    "prevLabel" TEXT NOT NULL,
    "partID" INTEGER NOT NULL REFERENCES "Parts"("partID"),
    "mainPartID" INTEGER NOT NULL REFERENCES "Parts"("partID")
);

-- Table: User
CREATE TABLE "Users" (
    "userID" UUID PRIMARY KEY,
    "name" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "role" TEXT NOT NULL
);

-- Table: JobQualification
CREATE TABLE "JobQualifications" (
    "jobQualificationID" SERIAL PRIMARY KEY,
    "label" VARCHAR NOT NULL,
    "userID" UUID NOT NULL REFERENCES "Users"("userID")
);

-- Table: WorkStation
CREATE TABLE "WorkStations" (
    "workStationID" SERIAL PRIMARY KEY,
    "validMachineID" INTEGER NOT NULL REFERENCES "ValidMachines"("validMachineID"),
    "jobQualificationID" INTEGER NOT NULL REFERENCES "JobQualifications"("jobQualificationID"),
    "label" VARCHAR NOT NULL
);

-- Table: Range
CREATE TABLE "Ranges" (
    "rangeID" SERIAL PRIMARY KEY,
    "partID" INTEGER NOT NULL REFERENCES "Parts"("partID"),
    "userID" UUID NULL REFERENCES "Users"("userID")
);

-- Table: Operation
CREATE TABLE "Operations" (
    "operationID" SERIAL PRIMARY KEY,
    "label" VARCHAR NOT NULL,
    "rangeID" INTEGER NOT NULL REFERENCES "Ranges"("rangeID"),
    "workStationID" INTEGER NOT NULL REFERENCES "WorkStations"("workStationID"),
    "machineID" INTEGER NOT NULL REFERENCES "Machines"("machineID"),
    "workTime" INTEGER
);

-- Table: OperationList
CREATE TABLE "OperationLists" (
    "operationID" INTEGER NOT NULL REFERENCES "Operations"("operationID"),
    "rangeID" INTEGER NOT NULL REFERENCES "Ranges"("rangeID"),
    PRIMARY KEY("operationID", "rangeID")
);

-- Table: OperationHistory
CREATE TABLE "OperationHistories" (
    "operationHistoryID" SERIAL PRIMARY KEY,
    "label" VARCHAR NOT NULL,
    "rangeID" INTEGER NOT NULL REFERENCES "Ranges"("rangeID"),
    "workStationID" INTEGER NOT NULL REFERENCES "WorkStations"("workStationID"),
    "machineID" INTEGER NOT NULL REFERENCES "Machines"("machineID"),
    "workTime" INTEGER NOT NULL
);

-- Table: QuoteLine
CREATE TABLE "QuoteLines" (
        "devisLineID" SERIAL PRIMARY KEY,
        "partID" INTEGER NOT NULL REFERENCES "Parts"("partID"),
        "quantity" INTEGER NOT NULL,
        "price" INTEGER NOT NULL,
        "devisID" INTEGER NOT NULL
);

-- Table: Quote
CREATE TABLE "Quotes" (
    "devisID" SERIAL PRIMARY KEY,
    "filePath" TEXT NOT NULL,
    "dateCreation" DATE NOT NULL,
    "dateValid" DATE NOT NULL
);

-- Table: OrderLine
CREATE TABLE "OrderLines" (
        "orderLineID" SERIAL PRIMARY KEY,
        "partID" INTEGER NOT NULL REFERENCES "Parts"("partID"),
        "quantity" INTEGER NOT NULL,
        "price" INTEGER NOT NULL,
        "orderID" INTEGER NOT NULL
);

-- Table: Order
CREATE TABLE "Orders" (
      "orderID" SERIAL PRIMARY KEY,
      "date" DATE NOT NULL,
      "clientName" TEXT NOT NULL
);

-- Establishing relationships between Quote and QuoteLine
ALTER TABLE "QuoteLines"
    ADD CONSTRAINT fk_Quote_QuoteLine
        FOREIGN KEY("devisID") REFERENCES "Quotes"("devisID");

-- Establishing relationships between Order and OrderLine
ALTER TABLE "OrderLines"
    ADD CONSTRAINT fk_Order_OrderLine
        FOREIGN KEY("orderID") REFERENCES "Orders"("orderID");

