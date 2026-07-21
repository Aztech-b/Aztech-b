/**
 * @typedef {Object} props
 * @property {data} data
 * @property {String} alignInfo
 *
 * @typedef {Object} data
 * @property {String} title
 * @property {String} screenshot
 * @property {String} description
 * @property {{code: String, live: String}} links
 * @property {{icon: SVGSVGElement, label: String}[]} chips
 * @returns
 */

/**
 *
 * @param {props} data
 */
function Project({ data }) {
    return <img className="projectCard" src={data.screenshot} alt={`screenshot of project ${data.title}`} />;
}

export default Project;
