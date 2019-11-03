export default {
  methods: {
    formatView(type, str) {
      switch(type) {
        case 'startTime':
        case 'endTime':
          const d = new Date(0);
          d.setUTCSeconds(str);

          return `${d.getDay() + 1}.${d.getMonth() + 1}.${d.getFullYear()} ${d.getHours()}:${d.getMinutes()}`;

        case 'duration':
          str = Math.abs(str);
          if (str < 60) return `${Math.round(str)}s`;
          if (str < 3600) {
            return `${Math.floor(str / 60)}m ${Math.round(str % 60)}s`;
          }
          let h = Math.floor(str / 3600);
          const m = Math.floor((str - (h * 3600)) / 60);
          const s = Math.round(str % 60);
          if (str < 86400) {
            return `${h}h ${m}m ${s}s`;
          }
          const days = Math.floor(h / 24);
          h = h - (days * 24);
          return `${days}d ${h}h ${m}m ${s}s`;

        case 'distance':
          return `${Math.round(str * 100) / 100} km`;

        case 'avgSpeed':
        case 'maxSpeed':
          return `${Math.round(str * 100) / 100} km/h`;

        case 'spentFuel':
          return `${Math.round(str * 100) / 100} l`;

        default:
          return str;
      }
    }
  },
  computed: {
    itemsProcessed() {
      if (this.getSelectedObjects.length > 0) {
        const processed = {
          duration: 0,
          distance: 0,
          avgSpeed: 0,
          spentFuel: 0,
          maxSpeed: 0,
        };

        // Adding up values
        for (let i = 0; i < this.getSelectedObjects.length; i += 1) {
          processed.duration += parseInt(this.getSelectedObjects[i].duration);
          processed.distance += parseInt(this.getSelectedObjects[i].distance);
          processed.spentFuel += parseInt(this.getSelectedObjects[i].spentFuel);
          processed.avgSpeed += parseInt(this.getSelectedObjects[i].avgSpeed);
        }

        // Getting average
        processed.avgSpeed /= this.getSelectedObjects.length;

        // Getting maximum
        processed.maxSpeed = Math.max(...this.getSelectedObjects.map(x => x.maxSpeed))

        return [processed];
      }
    },
  }
}
