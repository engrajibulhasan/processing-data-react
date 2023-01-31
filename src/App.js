import "./App.css";

function App() {
  const data = [
    {
      key: "fatherName",
      otherResponse: [
        {
          compareStatus: true,
          id: "8801687371406",
          searchedWith: "8801687371406",
          dataSource: "ldtax_cititzen",
          value: "মোঃ আতিয়ার রহমান",
        },
        {
          compareStatus: false,
          id: "8801711229847",
          searchedWith: "8801711229847",
          dataSource: "esaf",
          value: "Atik",
        },
        {
          compareStatus: false,
          id: "8801711229847",
          searchedWith: "8801711229847",
          dataSource: "nid",
          value: "মোঃ আতিয়ার রহমান",
        },
      ],
    },
    {
      key: "mobileNumber",
      otherResponse: [
        {
          compareStatus: true,
          id: "8801687371406",
          searchedWith: "8801687371406",
          dataSource: "ldtax_cititzen",
          value: "8801687371406",
        },
        {
          compareStatus: false,
          id: "8801711229847",
          searchedWith: "8801711229847",
          dataSource: "esaf",
          value: "8801711229847",
        },
        {
          compareStatus: false,
          id: "8801711229847",
          searchedWith: "8801711229847",
          dataSource: "passport",
          value: null,
        },
      ],
    },
    {
      key: "motherName",
      otherResponse: [
        {
          compareStatus: true,
          id: "8801687371406",
          searchedWith: "8801687371406",
          dataSource: "ldtax_cititzen",
          value: "মোছাঃ শাহানারা বেগম",
        },
        {
          compareStatus: false,
          id: "8801711229847",
          searchedWith: "8801711229847",
          dataSource: "esaf",
          value: "Keya",
        },
        {
          compareStatus: false,
          id: "8801711229847",
          searchedWith: "8801711229847",
          dataSource: "nid",
          value: "মোছাঃ শাহানারা বেগম",
        },
      ],
    },
  ];

  // Similar Data Process
  const similarDataProcess = (data) => {
    let result = data.reduce((obj, currItem) => {
      // Checking if value is not null
      if (currItem.value) {
        let value = currItem.value;
        let dataSource = currItem.dataSource;
        if (obj[value]) {
          obj[value].dataSource.push(dataSource);
        } else {
          obj[value] = { dataSource: [dataSource] };
        }
      }
      return obj;
    }, {});
    // Generating Result
    let processedDataConcat = "";
    for (let val in result) {
      processedDataConcat += `${val} (${result[val].dataSource.join(",")}),`;
    }
    return processedDataConcat;
  };

  return (
    <div classvalue="App">
      <table border="1" className="data-table">
        <thead>
          <tr>
            <th>Label</th>
            <th>Data and Source</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item, index) => {
            return (
              <tr key={index}>
                <td>{item.key}</td>
                <td>{similarDataProcess(item.otherResponse)}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}

export default App;
