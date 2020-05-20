//Job to create a Survey in DB for every Kobo submission
sql(state => {
  const { data } = state;
  return (
    `insert into "girls" ("` +
    [
      'survey_id',
      'submission_time',
      'girl_id',
      'kadafrica_site', 
      'first_name', 
      'surname',
      'phone',
      'marital_status',
      'age_married',
      'data_check',
      'reasons_joining'
    ].join('", "') +
    `") values ('` +
    [
      data.data._uuid,
      data.data._submission_time,
      data.data['Girl ID'],
      data.data['KadAfrica Site'], 
      data.data.first_name,
      data.data.surname,
      data.data.phone_number, //append 0 to front, if not null
      data.data.marital_status, // return statusMAP ==='Single' : 1, 'Divorcee' : 2, 'Monogamous Relationship' : 3
      data.data.age_married,
      data.data.data_check, // (age_married < 11 : "Confirm age married" ? null)
      data.data.reasons_joining /* return concatenated string only IF if these individual values ===1 : '${`reasons_income`}, ${`save_money`}, ${`reduce_poverty`}' . If 0, do not include in string*/
      
    ]
      .join("', '")
      .replace(/''/g, null) +
    `') ON CONFLICT DO NOTHING;`
  );
});
