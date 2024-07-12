import figlet from 'figlet';
import chalk from 'chalk';
import { setTimeout } from 'timers/promises';

const showAnimation = async () => {
  console.clear();
  
  const log = (text: string, color: (text: string) => string) => {
    console.log(color(text));
  };

  const showFiglet = (text: string, color: (text: string) => string) => {
    return new Promise<void>((resolve, reject) => {
      figlet(text, (err, data) => {
        if (err) {
          reject('Something went wrong...');
        } else {
          console.log(color(data!));
          resolve();
        }
      });
    });
  };

  try {
    await showFiglet('Initializing', chalk.blue);
    await setTimeout(500);
    log('Connecting to the Matrix...', chalk.green);
    await setTimeout(500);
    console.clear();
    await showFiglet('System Check', chalk.cyan);
    log('Loading modules...', chalk.yellow);
    await setTimeout(500);
    log('Configuring environment...', chalk.magenta);
    await setTimeout(500);
    console.clear();
    await showFiglet('Express App', chalk.red);
    await setTimeout(500);
    console.clear();
    await showFiglet('Loading...', chalk.green);
    await setTimeout(1000);
    console.clear();
    log(chalk.yellow('==============================='), chalk.yellow);
    log(chalk.yellow('   Server is starting...'), chalk.yellow);
    log(chalk.yellow('==============================='), chalk.yellow);
  } catch (err) {
    console.log(err);
  }
};

export default showAnimation;
