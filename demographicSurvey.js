//Job to create a Survey in DB for every Kobo submission
sql(state => {
  const { data } = state;
  const statusMap = { 'single' : 1, 'divorcee' : 2, 'In a monogamous relationship/marriage' : 3 };
  const ageValid = ( state.data.form.Age > 15 ? "Passed" : "Check age and DOB");

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
      'age',
      'data_check',
      'main_joining_reason'
    ].join('", "') +
    `") values ('` +
    [
      data.form._uuid,
      data.form._submission_time,
      data.form.Girl_ID,
      data.form.KadAfrica_Site,
      data.form.First_Name,
      data.form.Surname,
      `0${data.form.Your_Phone_Number}`,   // append 0 to phone number
      statusMap[data.form.What_is_your_marital_status], //map marital_status to coded responses to return different value, see Line 4
      data.form.Age,
      ageValid, // validate that age is over 15 yrs, flag that data check needed if < 15yrs, see line 5
      data.form.What_is_your_main_reason_for_j

    ]
      .join("', '")
      .replace(/''/g, null) +
    `') ON CONFLICT DO NOTHING;`
  );
});
