-- Table: ValidMachine
CREATE TABLE ValidMachine (
    validMachineId SERIAL PRIMARY KEY
);

-- Table: Machine
CREATE TABLE Machine (
    machineId SERIAL PRIMARY KEY
);

-- Table: JobQualificationList
CREATE TABLE JobQualificationList (
    JobQualificationListId SERIAL PRIMARY KEY
);

-- Table: WorkStation
CREATE TABLE WorkStation (
    workStationId SERIAL PRIMARY KEY,
    validMachineId INTEGER REFERENCES ValidMachine(validMachineId),
    JobQualificationListId INTEGER REFERENCES JobQualificationList(JobQualificationListId)
);

-- Table: Operation
CREATE TABLE Operation (
    operationId SERIAL PRIMARY KEY,
    rangeId INTEGER,
    workStationId INTEGER REFERENCES WorkStation(workStationId),
    machineId INTEGER REFERENCES Machine(machineId),
    workTime INTEGER
);

-- Table: OperationHistory
CREATE TABLE OperationHistory (
    operationId INTEGER REFERENCES Operation(operationId),
    rangeId INTEGER,
    workStationId INTEGER,
    machineId INTEGER,
    workTime INTEGER,
    PRIMARY KEY (operationId, rangeId)
);

-- Table: Supplier
CREATE TABLE Supplier (
    supplierId SERIAL PRIMARY KEY,
    name TEXT
);

-- Table: Part
CREATE TABLE Part (
    partId SERIAL PRIMARY KEY,
    isBought BOOLEAN,
    isDeliverables BOOLEAN,
    isRaw BOOLEAN,
    isIntermediate BOOLEAN,
    rangeId INTEGER,
    quantity INTEGER,
    priceId INTEGER,
    partListId INTEGER,
    supplierId INTEGER REFERENCES Supplier(supplierId),
    label TEXT
);

-- Table: PreviousPartId
CREATE TABLE PreviousPartId (
    partId INTEGER,
    quantity INTEGER,
    partListId INTEGER,
    PRIMARY KEY (partId, partListId)
);

-- Table: Partlist
CREATE TABLE Partlist (
    partListId SERIAL PRIMARY KEY,
    partId INTEGER REFERENCES Part(partId)
);

-- Table: User
CREATE TABLE User (
    userId SERIAL PRIMARY KEY,
    name TEXT,
    password TEXT,
    email TEXT,
    role TEXT,
    JobQualificationListId INTEGER REFERENCES JobQualificationList(JobQualificationListId)
);

-- Table: Range
CREATE TABLE Range (
    rangeId SERIAL PRIMARY KEY,
    partId INTEGER REFERENCES Part(partId),
    userId INTEGER REFERENCES User(userId)
);

-- Table: Price
CREATE TABLE Price (
    priceId SERIAL PRIMARY KEY,
    price INTEGER,
    date DATE
);

-- Table: QuoteLine
CREATE TABLE QuoteLine (
        devisLineId SERIAL PRIMARY KEY,
        partId INTEGER REFERENCES Part(partId),
        quantity INTEGER,
        price INTEGER,
        devisId INTEGER
);

-- Table: Quote
CREATE TABLE Quote (
    devisId SERIAL PRIMARY KEY,
    filePath TEXT,
    dateCrea DATE,
    dateValid DATE
);

-- Table: OrderLine
CREATE TABLE OrderLine (
        orderLineId SERIAL PRIMARY KEY,
        partId INTEGER REFERENCES Part(partId),
        quantity INTEGER,
        price INTEGER,
        orderId INTEGER
);

-- Table: Order
CREATE TABLE "Order" (
      orderId SERIAL PRIMARY KEY,
      date DATE,
      clientName TEXT
);

-- Establishing relationships between Quote and QuoteLine
ALTER TABLE QuoteLine
    ADD CONSTRAINT fk_Quote_QuoteLine
        FOREIGN KEY (devisId) REFERENCES Quote(devisId);

-- Establishing relationships between Order and OrderLine
ALTER TABLE OrderLine
    ADD CONSTRAINT fk_Order_OrderLine
        FOREIGN KEY (orderId) REFERENCES "Order"(orderId);