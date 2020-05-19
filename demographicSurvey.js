//Job to create a Survey in DB for every Kobo submission
sql(state => {
  const { data } = state;
  return (
    `insert into "tbl_demo_survey" ("` +
    [
      'survey_id',
      'submission_time',
      'site',
      'girl_id',
      'first_name',
      'surname'
    ].join('", "') +
    `") values ('` +
    [
      data.data._uuid,
      data.data._submission_time,
      data.data['KadAfrica Site'],
      data.data['Girl ID'],
      data.data['First Name'],
      data.data['Surname']
    ]
      .join("', '")
      .replace(/''/g, null) +
    `') ON CONFLICT DO NOTHING;`
  );
});
