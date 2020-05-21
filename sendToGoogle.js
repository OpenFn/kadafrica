//Job to load specific values to GoogleSheet
//GoogleSheet URL: https://docs.google.com/spreadsheets/d/1d2vMrgwGkNVzMJ-5Ro6xcUNgVyAs4ztjpCx4WZEZR2c/edit#gid=0
appendValues({
  spreadsheetId: '1d2vMrgwGkNVzMJ-5Ro6xcUNgVyAs4ztjpCx4WZEZR2c',
  range: 'surveys!A2',
  values: (state) => {
    console.log('Submission data: ' + JSON.stringify(state.data, null, 2));
    const data = state.data;
    return [
      [
        data.form._uuid,
        data.form._submission_time,
        data.form.Girl_ID,
        data.form.KadAfrica_Site
        //other_kobo_questions
      ],
    ];
  },
});
