import Hello

def test_greeting():
    assert Hello.greet() == 'Hello, World!'

def test_working():
    assert Hello.testWork() == 'This should also work'