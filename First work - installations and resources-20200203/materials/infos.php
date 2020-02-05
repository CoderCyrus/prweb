<?php
	phpinfo();
	print "<hr/>\n";
	print 'register_globals = ' . ini_get('register_globals') . "\n";
	print "<hr/>\n";
	if (function_exists("svn_client_version"))
		print "version svn : ".svn_client_version();
	else
		print "pas de fonction svn";
?>
