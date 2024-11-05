const { ArgumentParser } = require('argparse');
const { version } = { "version": "0.1.0" };

const parser = new ArgumentParser({
	description: 'Check Locale'
})

parser.add_argument('v', '--version', {action: 'version', version });
parser.add_argument(
	'-l',
	'--locale',
	{
		help: 'set locale to check',
		type='str'
	}
);
parser.add_argument(
	'-j',
	'--json',
	{
		help: 'output json',
		action: 'store_true'
	}
);


function checklocale() {
	console.dir(parser.parse_args());
}

checklocale();
