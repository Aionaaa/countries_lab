import Vue from 'vue';

document.addEventListener('DOMContentLoaded', () => {
  new Vue({
    el: "#app",
    data: {
      countries: []
    },
    mounted(){
      this.fetchCountries();
    },
    computed: {
      totalPopulation: function() {
        return this.countries.reduce((runningTotal, country) => runningTotal + country.population, 0);
      },
      countryName: function() {
        const nameArray = this.countries.map(this.countries.name)
        console.log(nameArray);
      }
    },
    methods: {
      fetchCountries: function() {
        fetch("https://restcountries.eu/rest/v2/all")
        .then(response => response.json())
        .then(data => this.countries = data);
      }
    }
  })
})
