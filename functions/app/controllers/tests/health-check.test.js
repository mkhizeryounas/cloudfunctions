const chai = require('chai');
const { expect } = chai;
chai.use(require('chai-as-promised'));

const HealtCheckController = require('../health-check');

describe('HealthCheck', () => {
  it('should return a boolean', async () => {
    const result = await HealtCheckController.run();
    expect(typeof result).to.equal('boolean');
  });
});
