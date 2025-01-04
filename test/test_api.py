import requests

def test_api_response():
    url = "https://nxvtfqdljcrvm4tn4tv4snjppa0yylyn.lambda-url.us-east-1.on.aws/"
    response = requests.get(url)
    assert response.status_code == 200
    data = response.json()
    assert isinstance(data, int)