
export default {
	state: {
		preview: false,
		error: '',
		invoiceData: {
			invoiceId: '12345ddd6',
			from: '',
			to: '',
			paymentTerms: '',
			items: {}
		}
	},
	setError(message) {
		this.state.error = message
		setTimeout(() => {
			this.removeError()
		}, 2000)
	},
	removeError() {
		this.state.error = ''
	}
}