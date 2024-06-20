-- Table: ValidMachine
CREATE TABLE "ValidMachines" (
    "validMachineID" SERIAL PRIMARY KEY
);

-- Table: Machine
CREATE TABLE "Machines" (
    "machineID" SERIAL PRIMARY KEY
);

-- Table: JobQualificationList
CREATE TABLE "JobQualificationList" (
    "JobQualificationListID" SERIAL PRIMARY KEY
);

-- Table: WorkStation
CREATE TABLE "WorkStations" (
    "workStationID" SERIAL PRIMARY KEY,
    "validMachineID" INTEGER NOT NULL REFERENCES "ValidMachines"("validMachineID"),
    "JobQualificationListID" INTEGER NOT NULL REFERENCES "JobQualificationList"("JobQualificationListID")
);

-- Table: Operation
CREATE TABLE "Operations" (
    "operationID" SERIAL PRIMARY KEY,
    "rangeID" INTEGER NOT NULL,
    "workStationID" INTEGER NOT NULL REFERENCES "WorkStations"("workStationID"),
    "machineID" INTEGER NOT NULL REFERENCES "Machines"("machineID"),
    workTime INTEGER
);

-- Table: OperationHistory
CREATE TABLE "OperationHistory" (
    "operationID" INTEGER REFERENCES "Operations"("operationID"),
    "rangeID" INTEGER NOT NULL,
    "workStationID" INTEGER NOT NULL,
    "machineID" INTEGER NOT NULL,
    workTime INTEGER NOT NULL,
    PRIMARY KEY("operationID", "rangeID")
);

-- Table: Supplier
CREATE TABLE "Suppliers" (
    "supplierID" SERIAL PRIMARY KEY,
    name TEXT NOT NULL
);

-- Table: PartAll
CREATE TABLE "Parts" (
    "partID" SERIAL PRIMARY KEY,
    "isBought" BOOLEAN NOT NULL,
    "isDeliverables" BOOLEAN NOT NULL,
    "isRaw" BOOLEAN NOT NULL,
    "isIntermediate" BOOLEAN NOT NULL,
    quantity INTEGER NOT NULL,
    "priceID" INTEGER NOT NULL,
    "partListID" INTEGER,
    "supplierID" INTEGER NOT NULL REFERENCES "Suppliers"("supplierID"),
    label VARCHAR NOT NULL,
    description TEXT
);

-- Table: PreviousPart
CREATE TABLE "PreviousParts" (
    "partID" INTEGER NOT NULL,
    quantity INTEGER NOT NULL,
    "partListID" INTEGER NOT NULL,
    PRIMARY KEY("partID", "partListID")
);

-- Table: Partlist
CREATE TABLE "Partlist" (
    "partListID" SERIAL PRIMARY KEY,
    "partID" INTEGER NOT NULL REFERENCES "Parts"("partID")
);

-- Table: User
CREATE TABLE "Users" (
    "userID" SERIAL PRIMARY KEY,
    name TEXT NOT NULL,
    password TEXT NOT NULL,
    email TEXT NOT NULL,
    role TEXT NOT NULL,
    "JobQualificationListID" INTEGER REFERENCES "JobQualificationList"("JobQualificationListID")
);

-- Table: Range
CREATE TABLE "Ranges" (
    "rangeID" SERIAL PRIMARY KEY,
    "partID" INTEGER NOT NULL REFERENCES "Parts"("partID"),
    "userID" INTEGER NOT NULL REFERENCES "Users"("userID")
);

-- Table: Price
CREATE TABLE "Prices" (
    "priceID" SERIAL PRIMARY KEY,
    price INTEGER NOT NULL,
    date DATE NOT NULL
);

-- Table: QuoteLine
CREATE TABLE "QuoteLines" (
        "devisLineID" SERIAL PRIMARY KEY,
        "partID" INTEGER NOT NULL REFERENCES "Parts"("partID"),
        quantity INTEGER NOT NULL,
        price INTEGER NOT NULL,
        "devisID" INTEGER NOT NULL
);

-- Table: Quote
CREATE TABLE "Quotes" (
    "devisID" SERIAL PRIMARY KEY,
    "filePath" TEXT NOT NULL,
    "dateCreation" DATE NOT NULL,
    "dateValID" DATE NOT NULL
);

-- Table: OrderLine
CREATE TABLE "OrderLines" (
        "orderLineID" SERIAL PRIMARY KEY,
        "partID" INTEGER NOT NULL REFERENCES "Parts"("partID"),
        quantity INTEGER NOT NULL,
        price INTEGER NOT NULL,
        "orderID" INTEGER NOT NULL
);

-- Table: Order
CREATE TABLE "Orders" (
      "orderID" SERIAL PRIMARY KEY,
      date DATE NOT NULL,
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

