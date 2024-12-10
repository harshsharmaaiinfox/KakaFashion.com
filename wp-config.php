<?php
define( 'WP_CACHE', true );
/**
 * The base configuration for WordPress
 *
 * The wp-config.php creation script uses this file during the installation.
 * You don't have to use the web site, you can copy this file to "wp-config.php"
 * and fill in the values.
 *
 * This file contains the following configurations:
 *
 * * Database settings
 * * Secret keys
 * * Database table prefix
 * * Localized language
 * * ABSPATH
 *
 * @link https://wordpress.org/support/article/editing-wp-config-php/
 *
 * @package WordPress
 */

// ** Database settings - You can get this info from your web host ** //
/** The name of the database for WordPress */
define( 'DB_NAME', 'u469285490_bNDiY' );

/** Database username */
define( 'DB_USER', 'u469285490_M3kkS' );

/** Database password */
define( 'DB_PASSWORD', '8s7DZR68Vs' );

/** Database hostname */
define( 'DB_HOST', '127.0.0.1' );

/** Database charset to use in creating database tables. */
define( 'DB_CHARSET', 'utf8' );

/** The database collate type. Don't change this if in doubt. */
define( 'DB_COLLATE', '' );

/**#@+
 * Authentication unique keys and salts.
 *
 * Change these to different unique phrases! You can generate these using
 * the {@link https://api.wordpress.org/secret-key/1.1/salt/ WordPress.org secret-key service}.
 *
 * You can change these at any point in time to invalidate all existing cookies.
 * This will force all users to have to log in again.
 *
 * @since 2.6.0
 */
define( 'AUTH_KEY',          '8H6nHGP~];ez$^i{Ff)(aNiI$/I6c+srR#/@M.%}{xY; mMk|gSQ<W$Y]x=e37v8' );
define( 'SECURE_AUTH_KEY',   '$^GU<:5([6KuxV-saj~SBd2^L-p(=v3_LC|gOc1?uv$NJmeYeJI/)9PsNpF23hHK' );
define( 'LOGGED_IN_KEY',     'X32+U$e29wN|pD0Aw@NBz>ORi?l]}Bij<UIW7tZJ$E3X,_xdq..MYaTHkjPAXp )' );
define( 'NONCE_KEY',         'LYA{t(k{@xT.YKl3&TDmJ`i-tm`TEH`r0 LemS@vrvj.RQ)5%`A<FCp9#14iop|U' );
define( 'AUTH_SALT',         '<mN%-1*(8_2}QzI%4f/H2b/4R47 R/yw*iMCtuF*Zo!mg]jSW=*>JT+#}}J$@twV' );
define( 'SECURE_AUTH_SALT',  'T<JnC+D02Xww(qO5LG L=aQ(&9?u3i+A5i#4!-0>)qu<;g>S . XaOsg?u{,rvY[' );
define( 'LOGGED_IN_SALT',    'c7<QwM[SV`O!Ea|f]e2}iqN=G-!hWHMdGv5g7u1v=>}_Wj}ftX&YAGfWf h5 H3g' );
define( 'NONCE_SALT',        'NQHW.Dc*kRn@n#Z[.6b^qX>3t}Y;}cF-0Ex41Rqx#.J$K^~TqC8bZv{R6R]9xu2t' );
define( 'WP_CACHE_KEY_SALT', 'XOG<08)Ycpu(Bn&+_adc&d{I@DiGE2A.sSG7Z(@%rP 0JPaEJ*M9tZ2Eru6S;E]@' );


/**#@-*/

/**
 * WordPress database table prefix.
 *
 * You can have multiple installations in one database if you give each
 * a unique prefix. Only numbers, letters, and underscores please!
 */
$table_prefix = 'wp_';


/* Add any custom values between this line and the "stop editing" line. */



/**
 * For developers: WordPress debugging mode.
 *
 * Change this to true to enable the display of notices during development.
 * It is strongly recommended that plugin and theme developers use WP_DEBUG
 * in their development environments.
 *
 * For information on other constants that can be used for debugging,
 * visit the documentation.
 *
 * @link https://wordpress.org/support/article/debugging-in-wordpress/
 */
if ( ! defined( 'WP_DEBUG' ) ) {
	define( 'WP_DEBUG', false );
}

define( 'FS_METHOD', 'direct' );
define( 'COOKIEHASH', 'c84c857cf0390133e379ff7bbf90976b' );
define( 'WP_AUTO_UPDATE_CORE', 'minor' );
/* That's all, stop editing! Happy publishing. */

/** Absolute path to the WordPress directory. */
if ( ! defined( 'ABSPATH' ) ) {
	define( 'ABSPATH', __DIR__ . '/' );
}

/** Sets up WordPress vars and included files. */
require_once ABSPATH . 'wp-settings.php';
