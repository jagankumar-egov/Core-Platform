INSERT INTO eg_businessdetails(
          id, name, businessurl, isenabled, code, businesstype, fund, function, 
          fundsource, functionary, department, vouchercreation, businesscategory, 
          isvoucherapproved, vouchercutoffdate, createddate, lastmodifieddate, 
          createdby, lastmodifiedby, ordernumber, version, tenantid, callbackforapportioning)
  VALUES (nextval('seq_eg_businessdetails'), 'Building Plan Approval', '/requests/_create.action', 
  true, 'BP','B','01','101500',null,null,'HD',false,(select id from eg_businesscategory where code='BP' 
  and tenantid='default'),false,null,(select extract ('epoch' from (select * from now()))*1000),(select extract ('epoch' from (select * 
  from now()))*1000),1,1,1,0,'mh.rohatest',false);
  
  INSERT INTO eg_businessdetails(
          id, name, businessurl, isenabled, code, businesstype, fund, function, 
          fundsource, functionary, department, vouchercreation, businesscategory, 
          isvoucherapproved, vouchercutoffdate, createddate, lastmodifieddate, 
          createdby, lastmodifiedby, ordernumber, version, tenantid, callbackforapportioning)
  VALUES (nextval('seq_eg_businessdetails'), 'Building Plan Approval', '/requests/_create.action', 
  true, 'BP','B','01','101500',null,null,'HD',false,(select id from eg_businesscategory where code='BP' 
  and tenantid='default'),false,null,(select extract ('epoch' from (select * from now()))*1000),(select extract ('epoch' from (select * 
  from now()))*1000),1,1,1,0,'mh.roha',false);