
// Class Mario = cetakan untuk membuat karakter Mario
class Mario {
  name: string;
  health: number;
  speed: number;
  coin: number;
  form: string;

  // constructor = dijalankan otomatis saat membuat object baru
  constructor(name: string, health: number, speed: number) {
    this.name = name;
    this.health = health;
    this.speed = speed;
    this.coin = 0;
    this.form = "Small";
  }

  walking(): void {
    this.speed += 2;
    console.log(`${this.name} berjalan. Speed sekarang: ${this.speed}`);
  }

  sprint(): void {
    this.speed += 4;
    console.log(`${this.name} berlari. Speed sekarang: ${this.speed}`);
  }

  jump(): void {
    console.log(`${this.name} melompat!`);
  }

  takeCoin(): void {
    this.coin += 1;
    console.log(`${this.name} ambil koin. Total koin: ${this.coin}`);
  }

  getMushroom(): void {
    this.form = "Super";
    this.health += 50;
    console.log(
      `${this.name} makan jamur. Form: ${this.form}, Health: ${this.health}`,
    );
  }

  getAttacked(damage: number): void {
    this.health -= damage;
    console.log(`${this.name} diserang. Health sekarang: ${this.health}`);
  }
}

// Luigi mewarisi (extends) semua milik Mario, lalu menambah fitur sendiri
class Luigi extends Mario {
  jumpHeight: number;

  constructor(name: string, health: number, speed: number) {
    super(name, health, speed); // panggil constructor Mario dulu
    this.jumpHeight = 10;
  }

  highJump(): void {
    console.log(`${this.name} melompat tinggi: ${this.jumpHeight}`);
  }
}

// Membuat object dari class
const mario = new Mario("Mario", 100, 5);
mario.walking();
mario.sprint();
mario.jump();
mario.takeCoin();
mario.takeCoin();
mario.getMushroom();
mario.getAttacked(30);

const luigi = new Luigi("Luigi", 100, 6);
luigi.walking();
luigi.highJump();
