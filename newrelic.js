/**
 * New Relic agent configuration.
 *
 * See lib/config.defaults.js in the agent distribution for a more complete
 * description of configuration variables and their potential values.
 */
 
exports.config = {
  /**
   * Array of application names.
   */
  app_name: ['Drum.r'],
  /**
   * Your New Relic license key.
   */
  license_key: '5eea6d03c1f1599323f8e6b6deb8f1666b6f122b',
  logging: {
    /**
     * Level at which to log. 'trace' is most useful to New Relic when diagnosing
     * issues with the agent, 'info' and higher will impose the least overhead on
     * production applications.
     */
    level: 'info'
  }
}
