-- Table: ValidMachine
CREATE TABLE "ValidMachines" (
    "validMachineID" SERIAL PRIMARY KEY
);

-- Table: Machine
CREATE TABLE "Machines" (
    "machineID" SERIAL PRIMARY KEY
);

-- Table: JobQualificationList
CREATE TABLE "JobQualificationLists" (
    "jobQualificationListID" SERIAL PRIMARY KEY
);

-- Table: WorkStation
CREATE TABLE "WorkStations" (
    "workStationID" SERIAL PRIMARY KEY,
    "validMachineID" INTEGER NOT NULL REFERENCES "ValidMachines"("validMachineID"),
    "jobQualificationListID" INTEGER NOT NULL REFERENCES "JobQualificationLists"("jobQualificationListID")
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
    "role" TEXT NOT NULL,
    "jobQualificationListID" INTEGER REFERENCES "JobQualificationLists"("jobQualificationListID")
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
    "rangeID" INTEGER NOT NULL REFERENCES "Ranges"("rangeID"),
    "workStationID" INTEGER NOT NULL REFERENCES "WorkStations"("workStationID"),
    "machineID" INTEGER NOT NULL REFERENCES "Machines"("machineID"),
    "workTime" INTEGER
);

-- Table: OperationHistory
CREATE TABLE "OperationHistories" (
    "operationHistoryID" SERIAL PRIMARY KEY,
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

