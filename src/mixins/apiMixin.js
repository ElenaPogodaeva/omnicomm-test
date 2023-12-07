class ApiMixinFactory {
  constructor() {
    if (new.target === undefined) {
      return undefined;
    }
  }
  getApiMixin(httpClient) {
    return {
      getInitialState() {
        return {
          universities: [],
          value: 'Russian Federation',
        };
      },
      componentDidMount() {
        this.apiClient = httpClient;
        this.search();
      },
      componentDidUpdate(prevProps, prevState) {
        if (prevState.value !== this.state.value) {
          this.search();
        }
      },
      search() {
        const value = this.state.value;
        this.apiClient({
          url: `http://universities.hipolabs.com/search?country=${value}`,
          method: 'GET',
        })
          .done((res) => this.setTable(res))
          .catch((err) => console.error(err));
      },
      handleSearchChange(event) {
        this.setState({
          value: event.target.value,
        });
      },
    };
  }
}

export default ApiMixinFactory;
