/* NPS_Referrals_v2 snippet

"https://mymoons.typeform.com/to/gmllzkAK#pais={%if event and event.country_ops %}{{ event.country_ops | url_encode}}{% else %}{{ "México" | url_encode}}{%endif%}&stage={{customer.Stage | url_encode }}&agent={% if event and event.last_agent_name%}{{event.last_agent_name | url_encode }}{% else %}{{ "no Agent" | url_encode}}{%endif%}&codigodereferido={{customer.Referral_Code}}&p={% if event and event.customer_nps %}{{event.customer_nps}}{% else %}{%endif%}&patientname={{customer.First_Name| url_encode}}

*/