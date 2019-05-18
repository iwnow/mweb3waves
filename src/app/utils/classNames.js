/**
 * classNames('c1', 'c2') => 'c1 c2'
 * @param  {...string} args 
 */
export function classNames(...args) {
    return args.join(' ');
}

export default classNames;