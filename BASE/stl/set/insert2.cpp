#include <iostream>
#include <set>
using namespace std;

int main()
{
    set<int> s;
    pair<set<int>::iterator, bool> pr;
    pr = s.insert(50);
    s.insert(40);
    s.insert(80);
    if (true == pr.second)
    {
        cout << *pr.first << " success" << endl;
    }
    else
    {
        cout << *pr.first << " fail" << endl;
    }
    set<int>::iterator iter;
    for (iter = s.begin(); iter != s.end(); ++iter)
    {
        cout << *iter << " ";
    }
    cout << endl;
    pr = s.insert(50);

    if (true == pr.second)
    {
        cout << *pr.first << " success" << endl;
    }
    else
    {
        cout << *pr.first << " fail" << endl;
    }
    for (iter = s.begin(); iter != s.end(); ++iter)
    {
        cout << *iter << " ";
    }
    cout << endl;

    return 0;
}