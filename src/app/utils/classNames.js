/**
 * classNames('c1', 'c2') => 'c1 c2'
 * @param  {...string} args 
 */
export function classNames(...args) {
    return args.filter(Boolean).join(' ');
}

export default classNames;