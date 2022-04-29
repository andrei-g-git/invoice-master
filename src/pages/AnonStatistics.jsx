import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import Chart from "chart.js/auto";
import { Bar } from "react-chartjs-2";
import { anonymousFinancesLoaded } from '../redux/actions';
import { getMonthlyEarningsByYear } from '../js/statProcessing';

export const AnonStatistics = (props) => {

	useEffect(() => {
		const $ = require("jquery");
		$.ajax({
			type: "GET",
			url: "/api/invoices/anon-stats",
			success: (response) => {
				console.log(response);
				props.processAndLoadMonthlyOrders(response);
			}

		})
	}, []);

	// let locOrientation = window.screen.lockOrientation || window.screen.mozLockOrientation || window.screen.msLockOrientation || window.screen.orientation.lock;
	// locOrientation('landscape');

	return (
		<div style={{backgroundColor: "teal"}}>
			<Bar data={{
					labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
					datasets: props.monthlyOrders.length  ?  props.monthlyOrders  :  [{label: "loading", data: [-1, -1, -1]}]
				}}
				options={{
					responsive: true,
					aspectRatio: 2
				}}
			/>
		</div>
	)
}

const mapStateToProps = (state) => {
	return{
		monthlyOrders: state.stats.anonymousPayments //this are NOT payments, they are order amounts, their status can still vary between SOD, PEN and OVD
	}
}

const mapDispatchToProps = (dispatch) => {
	return{
		processAndLoadMonthlyOrders: (response) => {

			const dataSets = getMonthlyEarningsByYear(response)

			dispatch(anonymousFinancesLoaded(dataSets))
		}		
	}

};

export default connect(mapStateToProps, mapDispatchToProps)(AnonStatistics);