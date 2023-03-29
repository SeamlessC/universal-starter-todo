import GaugeChart from "react-gauge-chart";

function GaugeGraph(data: { id: string, value: any, title: String }) {
    let percent = data.value / 100;

    const styles = {
        dial: {
          display: "inline-block",
          width: '100%',
          height: `auto`,
          color: "#000",
        },
        title: {
          fontSize: "1em",
          color: "#000"
        }
    };

	return (
        <div style={styles.dial}>
          <GaugeChart
            id={data.id}
            nrOfLevels={3}
            arcsLength={[0.9, 0.5, 0.3]}
            colors={["green", "yellow", "red"]}
            arcPadding={0.02}
            percent={percent}
            textColor={"#000000"}
            needleColor={"#5392ff"}
            formatTextValue={(value) => value}
          />
          <div style={styles.title}>{data.title}</div>
        </div>
    );
}

export default GaugeGraph;


  

