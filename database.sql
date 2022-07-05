CREATE TABLE behaviours(
    tables_name VARCHAR(255),
    table_description VARCHAR(255),
    PRIMARY KEY (tables_name)
);

INSERT INTO behaviours(tables_name, table_description) VALUES('driving_results', 'Driving Results');
INSERT INTO behaviours(tables_name, table_description) VALUES('influencing_negotiating', 'Influencing & Negotiating');
INSERT INTO behaviours(tables_name, table_description) VALUES('making_decisions', 'Making Decisions');
INSERT INTO behaviours(tables_name, table_description) VALUES('managing_conflict', 'Managing Conflict');
INSERT INTO behaviours(tables_name, table_description) VALUES('thinking_laterally', 'Thinking Laterally');

CREATE TABLE driving_results(
    id uuid NOT NULL,
    task VARCHAR(255),
    completed boolean NOT NULL DEFAULT false,
    PRIMARY KEY (id, completed)
);

CREATE TABLE influencing_negotiating(
    id uuid NOT NULL,
    task VARCHAR(255),
    completed boolean NOT NULL DEFAULT false,
    PRIMARY KEY (id, completed)
);

CREATE TABLE making_decisions(
    id uuid NOT NULL,
    task VARCHAR(255),
    completed boolean NOT NULL DEFAULT false,
    PRIMARY KEY (id, completed)
);

CREATE TABLE managing_conflict(
    id uuid NOT NULL,
    task VARCHAR(255),
    completed boolean NOT NULL DEFAULT false,
    PRIMARY KEY (id, completed)
);

CREATE TABLE thinking_laterally(
    id uuid NOT NULL,
    task VARCHAR(255),
    completed boolean NOT NULL DEFAULT false,
    PRIMARY KEY (id, completed)
);