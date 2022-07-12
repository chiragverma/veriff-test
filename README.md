# Boiler plate for testing UI and API - https://demo.saas-3.veriff.me/

This uses Cypress, Docker and Github actions

Tests runs automatically on new commits and there is a also a manual workflow in the Actions as well where the tests can be triggered manually


# To run tests locally:

```
git clone https://github.com/chiragverma/veriff-test.git
```

```
cd veriff-test
```

```
npx cypress run
```

# To run tests locally on docker:

```
docker-compose up
```

# To trigger tests manually on the CI

Go to https://github.com/chiragverma/veriff-test/actions and trigger the manual workflow
