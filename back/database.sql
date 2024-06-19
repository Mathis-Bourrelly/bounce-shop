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
    "validMachineID" INTEGER REFERENCES "ValidMachines"("validMachineID"),
    "JobQualificationListID" INTEGER REFERENCES "JobQualificationList"("JobQualificationListID")
);

-- Table: Operation
CREATE TABLE "Operations" (
    "operationID" SERIAL PRIMARY KEY,
    "rangeID" INTEGER,
    "workStationID" INTEGER REFERENCES "WorkStations"("workStationID"),
    "machineID" INTEGER REFERENCES "Machines"("machineID"),
    workTime INTEGER
);

-- Table: OperationHistory
CREATE TABLE "OperationHistory" (
    "operationID" INTEGER REFERENCES "Operations"("operationID"),
    "rangeID" INTEGER,
    "workStationID" INTEGER,
    "machineID" INTEGER,
    workTime INTEGER,
    PRIMARY KEY("operationID", "rangeID")
);

-- Table: Supplier
CREATE TABLE "Suppliers" (
    "supplierID" SERIAL PRIMARY KEY,
    name TEXT
);

-- Table: PartAll
CREATE TABLE "Parts" (
    "partID" SERIAL PRIMARY KEY,
    "isBought" BOOLEAN,
    "isDeliverables" BOOLEAN,
    "isRaw" BOOLEAN,
    "isIntermediate" BOOLEAN,
    "rangeID" INTEGER,
    quantity INTEGER,
    "priceID" INTEGER,
    "partListID" INTEGER,
    "supplierID" INTEGER REFERENCES "Suppliers"("supplierID"),
    label VARCHAR,
    description TEXT
);

-- Table: PreviousPart
CREATE TABLE "PreviousParts" (
    "partID" INTEGER,
    quantity INTEGER,
    "partListID" INTEGER,
    PRIMARY KEY("partID", "partListID")
);

-- Table: Partlist
CREATE TABLE "Partlist" (
    "partListID" SERIAL PRIMARY KEY,
    "partID" INTEGER REFERENCES "Parts"("partID")
);

-- Table: User
CREATE TABLE "Users" (
    "userID" SERIAL PRIMARY KEY,
    name TEXT,
    password TEXT,
    email TEXT,
    role TEXT,
    "JobQualificationListID" INTEGER REFERENCES "JobQualificationList"("JobQualificationListID")
);

-- Table: Range
CREATE TABLE "Ranges" (
    "rangeID" SERIAL PRIMARY KEY,
    "partID" INTEGER REFERENCES "Parts"("partID"),
    "userID" INTEGER REFERENCES "Users"("userID")
);

-- Table: Price
CREATE TABLE "Prices" (
    "priceID" SERIAL PRIMARY KEY,
    price INTEGER,
    date DATE
);

-- Table: QuoteLine
CREATE TABLE "QuoteLines" (
        "devisLineID" SERIAL PRIMARY KEY,
        "partID" INTEGER REFERENCES "Parts"("partID"),
        quantity INTEGER,
        price INTEGER,
        "devisID" INTEGER
);

-- Table: Quote
CREATE TABLE "Quotes" (
    "devisID" SERIAL PRIMARY KEY,
    "filePath" TEXT,
    "dateCreation" DATE,
    "dateValID" DATE
);

-- Table: OrderLine
CREATE TABLE "OrderLines" (
        "orderLineID" SERIAL PRIMARY KEY,
        "partID" INTEGER REFERENCES "Parts"("partID"),
        quantity INTEGER,
        price INTEGER,
        "orderID" INTEGER
);

-- Table: Order
CREATE TABLE "Orders" (
      "orderID" SERIAL PRIMARY KEY,
      date DATE,
      "clientName" TEXT
);

-- Establishing relationships between Quote and QuoteLine
ALTER TABLE "QuoteLines"
    ADD CONSTRAINT fk_Quote_QuoteLine
        FOREIGN KEY("devisID") REFERENCES "Quotes"("devisID");

-- Establishing relationships between Order and OrderLine
ALTER TABLE "OrderLines"
    ADD CONSTRAINT fk_Order_OrderLine
        FOREIGN KEY("orderID") REFERENCES "Orders"("orderID");

