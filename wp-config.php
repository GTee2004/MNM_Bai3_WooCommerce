<?php
/**
 * The base configuration for WordPress
 *
 * The wp-config.php creation script uses this file during the installation.
 * You don't have to use the website, you can copy this file to "wp-config.php"
 * and fill in the values.
 *
 * This file contains the following configurations:
 *
 * * Database settings
 * * Secret keys
 * * Database table prefix
 * * ABSPATH
 *
 * @link https://developer.wordpress.org/advanced-administration/wordpress/wp-config/
 *
 * @package WordPress
 */

// ** Database settings - You can get this info from your web host ** //
/** The name of the database for WordPress */
define( 'DB_NAME', 'shop' );

/** Database username */
define( 'DB_USER', 'root' );

/** Database password */
define( 'DB_PASSWORD', '' );

/** Database hostname */
define( 'DB_HOST', 'localhost' );

/** Database charset to use in creating database tables. */
define( 'DB_CHARSET', 'utf8mb4' );

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
define( 'AUTH_KEY',         'MWYa3kr0(6WJK)WIb=IlURxQm 7c^S1M!PlC3[wXY<aWFldXkCNf%esHcQC-:#Wu' );
define( 'SECURE_AUTH_KEY',  '!ronM.Nv,t_5#/$UW]VIFRM}i|r(Kd4WgE8e#D=)/j?HNBaeV&CYere7%D)KGeZq' );
define( 'LOGGED_IN_KEY',    'pD9Y4W)Xet~Q@]Rz XWNHqj[k1}Pa`d[aG_(4, CrH{lB{t.|3#,mQ^.%%r50VQ4' );
define( 'NONCE_KEY',        '>[4_`4VQ4^3Vs;&|lMGz,&UVJszOh)8^6sbL1jh,dbsS>5GKI9E!|5lVa_BI-Wgc' );
define( 'AUTH_SALT',        '_sA&8q2p|x_6ol.QJ.tViU+FB,TXSh[oe?1>4)[veXN3J%>z~N*oVhP {Q@RmR(/' );
define( 'SECURE_AUTH_SALT', '#G|Wcv~h RQ1/vuO UDHYeF099Dm%e(fl6?b}~6SGB9X{=N))@cgA17NFSnabx((' );
define( 'LOGGED_IN_SALT',   '/f1AXy|1xY~5&1]wzy%4qF}^S_:Te6-Q&vWwk!.xPj!{, aUAQOy!r6(v3bwQ~ib' );
define( 'NONCE_SALT',       'K:A+v,{d4fW`R[/ ~1+3*7ZBdnYk*5fP<4!>ch]-fT/+tZ}]7Mj]hAtHER|%!}<p' );

/**#@-*/

/**
 * WordPress database table prefix.
 *
 * You can have multiple installations in one database if you give each
 * a unique prefix. Only numbers, letters, and underscores please!
 *
 * At the installation time, database tables are created with the specified prefix.
 * Changing this value after WordPress is installed will make your site think
 * it has not been installed.
 *
 * @link https://developer.wordpress.org/advanced-administration/wordpress/wp-config/#table-prefix
 */
$table_prefix = 'wp_';

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
 * @link https://developer.wordpress.org/advanced-administration/debug/debug-wordpress/
 */
define( 'WP_DEBUG', false );

/* Add any custom values between this line and the "stop editing" line. */



/* That's all, stop editing! Happy publishing. */

/** Absolute path to the WordPress directory. */
if ( ! defined( 'ABSPATH' ) ) {
	define( 'ABSPATH', __DIR__ . '/' );
}

/** Sets up WordPress vars and included files. */
require_once ABSPATH . 'wp-settings.php';
