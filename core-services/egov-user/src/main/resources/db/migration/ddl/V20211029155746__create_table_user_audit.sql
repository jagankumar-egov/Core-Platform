CREATE TABLE eg_user_audit_table(
    id bigint NOT NULL,
    title character varying(8),
    salutation character varying(5),
    dob timestamp,
    locale character varying(16),
    username character varying(64) NOT NULL,
    password character varying(64) NOT NULL,
    pwdexpirydate timestamp DEFAULT CURRENT_TIMESTAMP,
    mobilenumber character varying(50),
    altcontactnumber character varying(50),
    emailid character varying(128),
    active boolean,
    name character varying(100),
    gender smallint,
    pan character varying(50),
    aadhaarnumber character varying(50),
    type character varying(50),
    version numeric DEFAULT 0,
    guardian character varying(100),
    guardianrelation character varying(32),
    signature character varying(36),
    accountlocked boolean DEFAULT false,
    bloodgroup character varying(32),
    photo character varying(36),
    identificationmark character varying(300),
    tenantid character varying(256) not null,
    uuid character(36),
    auditcreatedby bigint,
    auditcreatedtime bigint
);
