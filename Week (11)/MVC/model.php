<?php

/**
 *  Tính tổng hai số
 */
class SumModel
{

    private $x;
    private $y;

    private $sum;

    public function __construct($x, $y)
    {
        $this->x = $x;
        $this->y = $y;
    }

    public function solve()
    {
        $this->sum = $this->x + $this->y;
    }

    public function getSum()
    {
        return $this->sum;
    }
}

