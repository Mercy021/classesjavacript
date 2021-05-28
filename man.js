
const Bakerer = {
    songs() {
      console.log(`${this.name} songs`);
    }
  };
  class Praise{
    constructor(name) {
      this.name = name;
    }
  }
  class Worship{
    constructor(name) {
      this.name = name;
    }
  }
  Object.setPrototypeOf(Praise.prototype, Bakerer);
  Object.setPrototypeOf(Worship.prototype, Bakerer);
  let praise = new Praise('I do bakery but also on my free time i play acoustic guitar praise melody');
  let worship = new Worship('I am a bakerer but also i do sing worship');
  praise.songs();
  worship.songs();

 
