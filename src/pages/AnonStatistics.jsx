import React, { useEffect } from 'react';
import { connect } from 'react-redux';

export const AnonStatistics = (props) => {

	useEffect(() => {
		const $ = require("jquery");
		$.ajax({
			type: "GET",
			url: "/api/invoices/anon-stats",
			success: (response) => {
				console.log(response)
			}

		})
	});

	return (
		<div>AnonStatistics</div>
	)
}

const mapStateToProps = (state) => ({})

const mapDispatchToProps = {}

export default connect(mapStateToProps, mapDispatchToProps)(AnonStatistics);