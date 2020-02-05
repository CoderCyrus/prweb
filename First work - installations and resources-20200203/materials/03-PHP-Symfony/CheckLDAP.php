<?php

function checkLDAP($login, $password)
{
	$data = array();
	$data["auth"] = false;
	
	if (($login != "") && ($password != "")) {
		// Create LDAP connection
		$server = "rldap.ec-nantes.fr";
		$connectionLDAP = @ldap_connect($server);
		if ($connectionLDAP != null) {
			@ldap_set_option($connectionLDAP, LDAP_OPT_PROTOCOL_VERSION, 3);
			@ldap_set_option($connectionLDAP, LDAP_OPT_REFERRALS, 0);
			if (! @ldap_bind($connectionLDAP)) {
				@ldap_close($connectionLDAP);
				$connectionLDAP = null;
			}
		}
	
		if ($connectionLDAP) {
			if (@ldap_bind($connectionLDAP, "uid=$login, ou=people, dc=ec-nantes, dc=fr", $password)) {
				$data["auth"] = true;

				$Request = @ldap_search($connectionLDAP, "ou=people, dc=ec-nantes, dc=fr", "(uid=$login)");
				if (@ldap_count_entries($connectionLDAP,$Request) == 1) {
					$info = @ldap_get_entries($connectionLDAP, $Request);

					$data["dn"] = $info[0]["dn"];
					$data["Nom"] = $info[0]["sn"][0];
					$data["Prenom"] = $info[0]["givenname"][0];
					$data["Email"] = $info[0]["mail"][0];
					$data["uid"] = $info[0]["uid"][0];
					$data["supannetuid"] = $info[0]["supannetuid"][0];
				}
			}
		}

		@ldap_close($connectionLDAP);
	}

	return $data;
}

?>