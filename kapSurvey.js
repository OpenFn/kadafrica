sql(state => {
  const { data } = state;

  return (
    `insert into "girls_surveys" ("` +
    [
      'survey_id',
      'submission_time',
      'girl_id',
      'db_column_name', // define what survey questions we want to upload
    ].join('", "') +
    `") values ('` +
    [
      data.form._uuid,
      data.form._submission_time,
      data.form.Girl_ID,
      data.form.survey_question // define source value from Survey, if we want to manipulate
    ]
      .join("', '")
      .replace(/''/g, null) +
    `') ON CONFLICT DO NOTHING;`
  );
});
